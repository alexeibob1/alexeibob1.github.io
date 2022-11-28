import './Architects.css'
import {Form} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Architects() {
    return (
        <>
            <div className="architects-section">
                <div className="arch-wrapper">
                    <h1 className="arch-list-heading">Список архитекторов Беларуси</h1>
                    <Form className="search-form">
                        <Form.Control className="search-box" type="text" placeholder="Поиск архитектора" />
                    </Form>
                </div>

                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Ананич Юрий Отчество</ListGroup.Item>
                        <ListGroup.Item>Очередной архитектор</ListGroup.Item>
                        <ListGroup.Item>И ещё один</ListGroup.Item>
                    </ListGroup>
                </Card>

            </div>

        </>
    )
}

export default Architects