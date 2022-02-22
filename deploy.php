<?php
namespace Deployer;

require 'recipe/laravel.php'; //Все равно что import с командами, откуда частично будут использоваться команды в том числе и для проекта на NodeJS, изначально команды для php-проекта.

// Project name
set('application', 'new_project'); //Внес изменение new_project

// Project repository
set('repository', 'git@bitbucket.org:Trainee_abz/task1.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true); 

// Shared files/dirs between deploys 
add('shared_files', []);
add('shared_dirs', []);

// Writable dirs by web server 
add('writable_dirs', []);
set('allow_anonymous_stats', false);

// Hosts

host('164.92.198.5')
    ->user('root')
    ->identityFile(__DIR__ . '/src/playbook/.ssh/id_rsa')
    ->set('deploy_path', '/var/www/test2022-frontend-rostyslav-m.abzdev2.com'); //var/www/папка обычно называющаяся именем домена
    
// Tasks
task('build', function () { //В данном случае composer не нужен

    run('cd {{release_path}} && npm run build'); //Нужно было указать путь к папке и &&, чтобы deployer зашел туда и запустил npm install
});

task('permissions:fix', function () {
    run('sudo apt-get install acl');
    run('sudo chown -R www-data.www-data {{deploy_path}}/');
})->desc('Fix permissions after deployment (set owner to www-data)');

// StoryBook
task('webpack_storybook', function () {
    run('cd {{release_path}} && npm run build-storybook');
});

task('killall:node', function () {
    run('killall node');
});

task('reload:nginx', function () {
    run('sudo service nginx reload');
})->desc('Reload nginx');

task('install_nodejs_dependencies', function () {
    run('cd {{release_path}}  && npm install');
});

desc('Deploy your project');

task('deploy', [            //Можно выбирать между release и deploy
    'deploy:prepare',
    'deploy:release',
    'deploy:update_code',
    'install_nodejs_dependencies',
//     'webpack_storybook',
    'build',
    'deploy:shared',
    'deploy:writable',
    'deploy:symlink',
    'killall:node',
    'permissions:fix',
]);

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');
after('deploy', 'reload:nginx');

// Migrate database before symlink new release.

