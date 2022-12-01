import './Architects.css'
import {Form} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useTranslation } from 'react-i18next';
import data from "../noLangData.json";
import {Link} from "react-router-dom";
import { useState } from "react"

function Architects() {
    const { t, i18n } = useTranslation();

    const elems = Object.keys(data).map((id) => [id, t(`architects.${id}.surname`) + " " + t(`architects.${id}.name`) + " " + t(`architects.${id}.patronymic`)])

    // the value of the search field
    const [name, setName] = useState('');

    // the search result
    const [foundUsers, setFoundUsers] = useState(elems);

    const filter = (e) => {
        const keyword = e.target.value;
        if (keyword !== "") {
            const results = elems.filter((user) => {
                return user[1].toLowerCase().includes(keyword.toLowerCase());
            });
            setFoundUsers(results);
        } else {
            setFoundUsers(elems);
            // If the text field is empty, show all users
        }

        setName(keyword);
    };

    return (
        <>
            <div className="architects-section">
                <div className="arch-wrapper">
                    <h1 className="arch-list-heading">{t("architectsListHeader")}</h1>
                    <Form className="search-form">
                            <Form.Control className="search-box" type="search" placeholder={t("searchCaption")} onChange={filter} />
                    </Form>
                </div>

                <Card className="architects-list">
                    <ListGroup variant="flush">

                        {foundUsers && foundUsers.length > 0 ? (
                        foundUsers.map((id) =>
                            <ListGroup.Item action as={Link} to={`/architects/${id[0]}`} className="arch-card">
                                <p className="arch-fio">{t(`architects.${id[0]}.surname`)} {t(`architects.${id[0]}.name`)} {t(`architects.${id[0]}.patronymic`)}</p>
                                <p className="arch-descr">{t(`architects.${id[0]}.shortDescription`)}</p>
                            </ListGroup.Item>

                        )) : ("")}

                    </ListGroup>
                </Card>

            </div>

        </>
    )
}

export default Architects