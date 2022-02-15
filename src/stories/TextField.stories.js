import HOCTextField from '../Components/TextField/HOCTextField';

export default {
  title: 'HOCTextField',
  component: HOCTextField,
  // decorators: [withKnobs],
};

// eslint-disable-next-line max-len
// Здесь мы создаем instance кнопки с разным набором свойст. Таким образом мы можем посмотреть разные варианты компонента.

function Template(args) {
  // eslint-disable-next-line max-len
  // eslint-disable-next-line react/jsx-filename-extension,react/react-in-jsx-scope,react/jsx-props-no-spreading
  return <HOCTextField {...args} />;
}

export const Outlined = Template.bind({});
Outlined.args = {
  id: 'outlined-basic',
  label: 'Outlined', // Можно придумать любое название
  variant: 'outlined', // Передаем сюда заготовленные значения. В данном случае те, что есть в material UI.
};

export const Filled = Template.bind({});
Filled.args = {
  id: 'filled-basic',
  label: 'Filled', // Можно придумать любое название
  variant: 'filled', // Передаем сюда заготовленные значения. В данном случае те, что есть в material UI.
};

export const Standart = Template.bind({});
Standart.args = {
  id: 'standard-basic',
  label: 'Standard', // Можно придумать любое название
  variant: 'standard', // Передаем сюда заготовленные значения. В данном случае те, что есть в material UI.
};
