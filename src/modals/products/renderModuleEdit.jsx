/* Stylesheets */
import './renderModuleEdit.css'

function renderModuleEdit(moduleItem, index, setIsEditing, handleChangeModule, handleNumberChange) {
    switch (moduleItem.type) {
        case 'Static Text':
            return (
                <div className='moduleEdit-container prod-hover'
                    key={moduleItem.id}
                    style={{ marginBottom: `${moduleItem.spacing}px` }}>
                    <textarea
                        type="text"
                        value={moduleItem.content}
                        style={{
                            fontWeight: moduleItem.bold ? 'bold' : 'normal',
                            textAlignLast: `${moduleItem.textAlign}`,
                            fontSize: `${moduleItem.size}px`,
                        }}
                        onChange={
                            (event) =>
                                handleChangeModule(event.target.value, moduleItem.id, "content")
                        }
                        placeholder="Input text here*" />
                </div>
            );
        case 'Text Input':
            return (
                <div className='moduleEdit-container prod-hover'
                    key={moduleItem.id}
                    style={{ marginBottom: `${moduleItem.spacing}px` }}>
                    <textarea
                        type="text"
                        value={moduleItem.content}
                        style={{
                            fontWeight: moduleItem.bold ? 'bold' : 'normal',
                            textAlignLast: `${moduleItem.textAlign}`,
                            fontSize: `${moduleItem.size}px`,
                        }}
                        onChange={
                            (event) =>
                                handleChangeModule(event.target.value, moduleItem.id, "content")
                        }
                        placeholder="Input text here*" />
                    <p className='mock-textbox' style={{ marginTop: `7px` }}>
                        {
                            moduleItem.textbox == true
                                ?
                                <div><br /><br /><br /></div>
                                :
                                <br />
                        }
                    </p>
                </div>
            );
            return (
                <div className='prod-module selected-module prod-hover'
                    key={moduleItem.id}
                    style={{ marginBottom: `${moduleItem.spacing}px` }}>

                    <input
                        type="text"
                        value={moduleItem.content}
                        style={{ fontSize: `${moduleItem.size}px` }}
                        onChange={(event) => handleChangeModule(event.target.value, moduleItem.id, "content")}
                        placeholder="Input text here*" />
                    <p className='mock-textbox'><br /><br /><br /></p>
                </div>
            );

    }
}

export default renderModuleEdit;