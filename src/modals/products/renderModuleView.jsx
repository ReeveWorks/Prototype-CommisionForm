/* Stylesheets */
import '../../styles/product-edit.css'

function renderModuleView(moduleItem, index, setIsEditing) {
    switch (moduleItem.type) {
        case 'Static Text':
            return (
                <div className='prod-module prod-hover line-justify'
                    key={index}
                    id={moduleItem.id}
                    style={{
                        fontSize: `${moduleItem.size}px`,
                        marginBottom: `${moduleItem.spacing}px`,
                        textAlign: 'justify',
                        textAlignLast: `${moduleItem.textAlign}`,
                        fontWeight: moduleItem.bold ? 'bold' : 'normal'
                    }}
                    onClick={() => setIsEditing(index)}>
                    {moduleItem.content}
                </div>
            );
        case 'Text Input':
            return (
                <div className='prod-module prod-hover line-justify'
                    key={index}
                    id={moduleItem.id}
                    style={{ 
                        fontSize: `${moduleItem.size}px`, 
                        marginBottom: `${moduleItem.spacing}px` 
                    }}
                    onClick={() => setIsEditing(index)}>

                    {moduleItem.content}
                    {moduleItem.isRequired && <i className='prod-required' style={{ fontSize: `${moduleItem.size}px` }}>*</i>}
                    <p className='mock-textbox' style={{ marginTop: `7px` }}><br /></p>
                </div>
            );
        case 'txtblock-input':
            return (
                <div className='prod-module prod-hover line-justify'
                    key={index}
                    id={moduleItem.id}
                    style={{ fontSize: `${moduleItem.size}px`, marginBottom: `${moduleItem.spacing}px` }}
                    onClick={() => setIsEditing(index)}>
                    {moduleItem.content}
                    {moduleItem.isRequired && <i className='prod-required'>*</i>}
                    <p className='mock-textbox' style={{ marginTop: `7px` }}><br /><br /><br /></p>
                </div>
            );

    }
}

export default renderModuleView;