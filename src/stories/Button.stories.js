import ButtonStory from "../Components/Storybook_components/Button";

export default {
    title: 'ButtonStory',
    component: ButtonStory,
    // decorators: [withKnobs],
};



function Template(args) {
    return <ButtonStory {...args} />;
}

export const Outlined = Template.bind({});
Outlined.args = {
    isDisable: true
};