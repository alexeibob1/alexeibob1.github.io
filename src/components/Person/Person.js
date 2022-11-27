import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import './Person.css'
import photo from '../../img/ananich.png'

function PersonOfDay() {
    return (
        <Stack className="person-section">
            <h2 className="heading_person-section">Деятель дня</h2>
            <Card className="person-card">
                <Card.Img src={photo} className="person-photo"/>
                <Card.Body className="person-info">
                    <Card.Title className="person-name">Юрий Ананич</Card.Title>
                    <Card.Text className="person-years">
                        1955 - 2015
                    </Card.Text>
                    <Card.Text className="person-description">
                        Внёс вклад в формирование архитектурного облика современного
                        Минска и других белорусских городов. Член Белорусского союза архитекторов.
                    </Card.Text>
                    <Button className="button-more">Узнать больше</Button>
                </Card.Body>
            </Card>
        </Stack>
    );
}

export default PersonOfDay;