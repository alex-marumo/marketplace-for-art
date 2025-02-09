import React from 'react';

const Homepage = () => {
    const [userName, setUserName] = React.useState('');

    React.useEffect(() => {
        // Simulate fetching user data from an API
        const fetchUserName = async () => {
            try {
            // Simulate fetching user data from an API
                const response = await new Promise((resolve) =>
                    setTimeout(() => resolve({ name: 'John Doe' }), 1000)
                );
                setUserName(response.name);
            } catch (error) {
                console.error('Failed to fetch user data:', error);
                setUserName('Guest');
            }
        };

        fetchUserName();
    }, []);

    return (
        <div>
            <header>
                <h1>Welcome, {userName}</h1>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#artists">Artists</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="home">
                    <h2>Discover Unique Locally-made Artworks</h2>
                </section>
                <section id="artists">
                    <h2>Featured Artists</h2>
                    <div className="artist-list">
                        {/* Artist profiles will be displayed here */}
                    </div>
                </section>
                <section id="gallery">
                    <h2>Art Gallery</h2>
                    <div className="art-gallery">
                        {/* Art pieces will be dynamically loaded here */}
                    </div>
                </section>
                <section id="contact">
                    <h2>Contact Us</h2>
                    <form>
                        <label>
                            Name:
                            <input type="text" name="name" />
                        </label>
                        <label>
                            Email:
                            <input type="email" name="email" />
                        </label>
                        <label>
                            Message:
                            <textarea name="message"></textarea>
                        </label>
                        <button type="submit">Send</button>
                    </form>
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Artistic Marketplace. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Homepage;