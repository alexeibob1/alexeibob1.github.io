import './Architects.css'
import {Form} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useTranslation } from 'react-i18next';
import data from "../noLangData.json";
import {Link} from "react-router-dom";

function Architects() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className="architects-section">
                <div className="arch-wrapper">
                    <h1 className="arch-list-heading">{t("architectsListHeader")}</h1>
                    <Form className="search-form">
                            <Form.Control className="search-box" type="text" placeholder={t("searchCaption")} />
                    </Form>
                </div>

                <Card className="architects-list">
                    <ListGroup variant="flush">
                        {Object.keys(data).map((id, index) =>
                            <ListGroup.Item action as={Link} to={`/architects/${id}`}>
                                <p className="arch-fio">{t(`architects.${id}.surname`)} {t(`architects.${id}.name`)} {t(`architects.${id}.patronymic`)}</p>
                                <p className="arch-descr">{t(`architects.${id}.shortDescription`)}</p>
                            </ListGroup.Item>

                        )}

                    </ListGroup>
                </Card>

            </div>

        </>
    )
}

export default Architects