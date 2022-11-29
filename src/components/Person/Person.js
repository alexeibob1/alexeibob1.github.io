import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import './Person.css'
import photo from '../../data/ananich_yury/photos/ava.png'
import '../../i18n.js';

import { useTranslation } from 'react-i18next';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function PersonOfDay() {
    const { t, i18n } = useTranslation();
    let index = getRandomInt(5);
    return (
        <Stack className="person-section">
            <h2 className="heading_person-section">{t("person_of_day")}</h2>
            <Card className="person-card">
                <Card.Img src={photo} className="person-photo"/>
                <Card.Body className="person-info">
                    <Card.Title className="person-name">{t(`architects[${index}].surname`)}</Card.Title>
                    <Card.Text className="person-years">
                        1955 - 2015
                    </Card.Text>
                    <Card.Text className="person-description">

                    </Card.Text>
                    <Button className="button-more">Узнать больше</Button>
                </Card.Body>
            </Card>
        </Stack>
    );
}

export default PersonOfDay;