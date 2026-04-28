/* Stylesheets */
import '../styles/product-edit.css'

/* Functions/Hooks */
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';

function renderModuleEdit(moduleItem, index) {
    switch (moduleItem.type) {
        case 'title':
            return (
                <div className='prod-module selected-module prod-hover'
                    key={index}
                    id={moduleItem.id}
                    style={{ marginBottom: `${moduleItem.spacing}px` }}>
                    {editTab(moduleItem, index)}
                    <input
                        type="text"
                        value={moduleItem.content}
                        style={{ fontSize: `${moduleItem.size}px`, textAlign: 'center' }}
                        onChange={(event) => handleChangeModule(event, moduleItem.id, "content")}
                        placeholder="Input text here*" />
                </div>
            );
        case 'text-input':
            return (
                <div className='prod-module selected-module prod-hover'
                    key={index}
                    id={moduleItem.id}
                    style={{ marginBottom: `${moduleItem.spacing}px` }}>
                    {editTab(moduleItem, index)}
                    <input
                        type="text"
                        value={moduleItem.content}
                        style={{ fontSize: `${moduleItem.size}px` }}
                        onChange={(event) => handleChangeModule(event, moduleItem.id, "content")}
                        placeholder="Input text here*" />
                    <p className='mock-textbox'><br /></p>
                </div>
            );
        case 'txtblock-input':
            return (
                <div className='prod-module selected-module prod-hover'
                    key={index}
                    id={moduleItem.id}
                    style={{ marginBottom: `${moduleItem.spacing}px` }}>
                    {editTab(moduleItem, index)}
                    <input
                        type="text"
                        value={moduleItem.content}
                        style={{ fontSize: `${moduleItem.size}px` }}
                        onChange={(event) => handleChangeModule(event, moduleItem.id, "content")}
                        placeholder="Input text here*" />
                    <p className='mock-textbox'><br /><br /><br /></p>
                </div>
            );
    }
}