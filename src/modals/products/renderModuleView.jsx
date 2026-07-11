/* Stylesheets */
import './styles/renderModuleView.css'

function renderModuleView(moduleItem, index, setIsEditing) {
    function handleEmptyContent() {
        if (moduleItem.content.trim() === '') {
            return (
                <div>
                    <p className='empty-text'>Input text here<span className='txt-accent'>*</span></p>
                    {moduleItem.isRequired && <i className='txt-accent' style={{ fontSize: `${moduleItem.size}px` }}>*</i>}
                </div>
            );
        }
        else {
            return (
            <div>
                {moduleItem.content}
                {moduleItem.isRequired && <i className='txt-accent' style={{ fontSize: `${moduleItem.size}px` }}>*</i>}
            </div>
            );
        }
    }

    switch (moduleItem.type) {
        case 'Static Text':
            return (
                <div className='productView-container'
                    key={index}
                    id={moduleItem.id}
                    style={{
                        fontWeight: moduleItem.bold ? 'bold' : 'normal',
                        textAlignLast: `${moduleItem.textAlign}`,
                        marginBottom: `${moduleItem.spacing}px`,
                        fontSize: `${moduleItem.size}px`
                    }}
                    onClick={() => setIsEditing(index)}>
                    {handleEmptyContent()}
                </div>
            );
        case 'Text Input':
            return (
                <div className='productView-container'
                    key={index}
                    id={moduleItem.id}
                    style={{
                        fontWeight: moduleItem.bold ? 'bold' : 'normal',
                        textAlignLast: `${moduleItem.textAlign}`,
                        marginBottom: `${moduleItem.spacing}px`,
                        fontSize: `${moduleItem.size}px`
                    }}
                    onClick={() => setIsEditing(index)}>

                    {handleEmptyContent()}

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
                <div className='productView-container'
                    key={index}
                    id={moduleItem.id}
                    style={{
                        fontWeight: moduleItem.bold ? 'bold' : 'normal',
                        textAlignLast: `${moduleItem.textAlign}`,
                        marginBottom: `${moduleItem.spacing}px`,
                        fontSize: `${moduleItem.size}px`
                    }}
                    onClick={() => setIsEditing(index)}>

                    {handleEmptyContent()}

                    <p className='mock-textbox'><br /></p>
                </div>
            );
        case 'Container Box':
            return (
                <div className='productView-container'
                    key={index}
                    id={moduleItem.id}
                    style={{
                        marginBottom: `${moduleItem.spacing}px`,
                    }}
                    onClick={() => setIsEditing(index)}>


                    test
                </div>
            );

    }
}

export default renderModuleView;