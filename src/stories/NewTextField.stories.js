import NewTextField from "../Components/Storybook_components/NewTextField";

export default {
    title: 'NewTextField',
    component: NewTextField,
    // decorators: [withKnobs],
};



function Template(args) {
    return <NewTextField {...args} />;
}

export const Outlined = Template.bind({});
Outlined.args = {

};

