/* Stylesheets */
import './styles/renderModuleEdit.css'

function renderModuleEdit(moduleItem, index, setIsEditing, handleChangeModule, handleNumberChange) {
    switch (moduleItem.type) {
        case 'Static Text':
            return (
                <div className='productEdit-container prod-hover'
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
                <div className='productEdit-container prod-hover'
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
                        placeholder="Input text here*"
                    />

                    <p className='mock-textbox'>
                        {
                            moduleItem.textbox == true
                                ?
                                <><br /><br /><br /></>
                                :
                                <br />
                        }
                    </p>
                </div>
            );
        case 'Number Input':
            return (
                <div className='productEdit-container prod-hover'
                    key={moduleItem.id}
                    style={{ marginBottom: `${moduleItem.spacing}px` }}>
                    {/* <textarea
                        type="text"
                        className='mock-textbox'
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
                        placeholder="Input text here*"
                    /> */}

                    

                    <p className='mock-textbox'>
                        <textarea
                        type="text"
                        className='mock-textbox'
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
                        placeholder="Input text here*"/>
                    </p>
                </div>
            );
        case 'Container Box':
            return (
                <div className='productEdit-container prod-hover'
                    key={index}
                    id={moduleItem.id}
                    style={{
                        marginBottom: `${moduleItem.spacing}px`,
                    }}>
                        <button className='btn-container'>
                            +
                        </button>
                </div>
            );

    }
}

export default renderModuleEdit;