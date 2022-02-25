import Textarea from "../Components/Storybook_components/Textarea";

export default {
    title: 'Textarea',
    component: Textarea,
    // decorators: [withKnobs],
};



function Template(args) {
    return <Textarea {...args} />;
}

export const Outlined = Template.bind({});
Outlined.args = {

};