import React, { useState, useEffect } from 'react';

function UserData() {
    const [user, setUser] = useState(null);

    // Використовуємо useEffect для запиту даних користувача після монтування компонента
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/6')
            .then(response => response.json())
            .then(data => {
                setUser(data); // Зберігаємо отримані дані в стані
            });
    }, []); // Пустий масив залежностей означає, що ефект виконається лише один раз після першого рендеру

    return (
        <div>
            {user ? (
                <div>
                    <p>Ім'я: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>Завантаження даних користувача...</p>
            )}
        </div>
    );
}

export default UserData;