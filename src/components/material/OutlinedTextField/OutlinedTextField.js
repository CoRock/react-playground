import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
        marginTop: "-16px"
    },
    textField: {
        width: '100%',
        fontWeight: 'bold',
        // marginLeft: theme.spacing.unit,
        // marginRight: theme.spacing.unit
        // '&$cssFocused': {
        //     color: "#1C90FB"
        // },
    },
    dense: {
        marginTop: 16
    },
    menu: {
        width: 200
    },
    notchedOutline: {
        borderColor: "#1C90FB !important"
    },
    placeholderText: {
        fontWeight: "bold"
    }
});

class OutlinedTextFields extends Component {
    state = {
        name: "이름을 입력하세요"
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="outlined-bare"
                    className={classes.textField}
                    placeholderStyle={classes.placeholderText}
                    placeholder={this.state.name}
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                        classes: {
                            notchedOutline: classes.notchedOutline
                        }
                    }}
                />
            </form>
        );
    }
}

OutlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlinedTextFields);
