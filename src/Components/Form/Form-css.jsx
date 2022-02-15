import { createUseStyles } from "react-jss";

const styles = createUseStyles({
    root: {
        "& h1": {
            textAlign: "center",
            color: "purple"
        },
        "& .basic_h2": {
            textAlign: "right",
            color: "green",
            cursor: "pointer",
            "&:hover": {
                color: "purple"
            }
        },
        "& .p": {
            display: "inline",
            textAlign: "right",
        }
    },

});

export default styles;