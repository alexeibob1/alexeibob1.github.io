import Stack from 'react-bootstrap/Stack';
import './About.css'


function AboutSection() {
    return (
        <Stack className="about">
            <h1 className="greetings">
                Откройте для себя белорусскую архитектуру
            </h1>
            <div className="text">
                <p>
                    Белорусская архитектура – это коллективная многовековая работа и гордость народов,
                    в тот или иной исторический промежуток населявших территорию страны.
                </p>
                <p>
                    Здесь вы найдёте информацию о выдающихся архитекторах Беларуси.
                </p>
            </div>
        </Stack>

    )
}

export default AboutSection;