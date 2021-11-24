import React, { useState } from 'react'

const Categories = ({ categories, onClickItem }) => {

    const [category, setCategory] = useState(null);

    return (
        <div className="categories">
            <ul>
                <li>Все</li>
                { categories.map((name) => (
                    <li
                        className ={ category === name ? 'active' : ''}
                        onClick = {() => setCategory(name) }
                        key = {name}>{name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories