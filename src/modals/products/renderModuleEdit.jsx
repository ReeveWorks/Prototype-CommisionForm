/* Stylesheets */
import '../../styles/product-edit.css'

function renderModuleEdit(moduleItem, index, setIsEditing, handleChangeModule, handleNumberChange) {
    switch (moduleItem.type) {
        case 'Static Text':
            return (
                <div className='prod-module selected-module prod-hover'
                    key={moduleItem.id}
                    style={{ marginBottom: `${moduleItem.spacing}px` }}>
                    <input
                        type="text"
                        value={moduleItem.content}
                        style={{
                            fontSize: `${moduleItem.size}px`,
                            fontWeight: moduleItem.bold ? 'bold' : 'normal',
                            textAlign: 'justify',
                            textAlignLast: `${moduleItem.textAlign}`,
                        }}
                        onChange={(event) => handleChangeModule(event.target.value, moduleItem.id, "content")}
                        placeholder="Input text here*" />
                </div>
            );
        case 'text-input':
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
                    <p className='mock-textbox'><br /></p>
                </div>
            );
        case 'txtblock-input':
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