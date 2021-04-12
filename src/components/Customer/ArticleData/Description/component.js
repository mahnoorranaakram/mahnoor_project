import React, { Component } from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import MUIEditor, { MUIEditorState, toolbarControlTypes, toHTML } from 'react-mui-draft-wysiwyg'
import { ContentState, convertToRaw, convertFromRaw } from 'draft-js'
import { convertToHTML, convertFromHTML } from 'draft-convert';
import { Button } from "@material-ui/core";

const editorConfig = {}
const rawContent = {
    blocks: [],
    entityMap: {},
}

class ArticleDescription extends Component {

    state = {
        editorState: MUIEditorState.createWithContent(
            editorConfig,
            convertFromRaw(rawContent),
          ),
        config: {
            toolbar: {
               controls: [
                ],
               },
               editor: {
                className: 'texteditor',
            },
            draftEditor: { readOnly: true } 
        },
    }

    onChange = (newState) => {
        this.setState({
            editorState: newState
        })
    }

    editorHandler = () => {
        let oldState = this.state.config

        let newReadOnlyState = !this.state.config.draftEditor.readOnly
        oldState.draftEditor.readOnly = newReadOnlyState
        this.setState({
            config: oldState
        })
    }

    render() {
        const {
            classes,
        } = this.props;

        const {
            editorState,
            config
        } = this.state;

        return (
                <div className={classes.articledescwrapper}>
                    <div className={classes.titlewrapper}>
                        <span>Artikelbeschreibung</span>
                    </div>
                    <div className={classes.descriptioneditor}>
                        <MUIEditor editorState={editorState} 
                            onChange={this.onChange}
                            config={config}
                        />
                        
                        <Button className="editbtn" color="primary" variant="outlined" onClick={this.editorHandler}>
                            {
                                config.draftEditor.readOnly ? "Editieren" : "Done"
                            }
                        </Button>
                    </div>
                </div>
        )
    }
}

export default withStyles(styles)(ArticleDescription);