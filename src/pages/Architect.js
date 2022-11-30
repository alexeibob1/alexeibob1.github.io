import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import './Architect.css'
import data from "../noLangData.json";
import '../i18n.js';
import {Link, useParams} from "react-router-dom"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { useTranslation } from 'react-i18next';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function Architect() {
    const { t, i18n } = useTranslation();
    const params = useParams();
    const id = params.id;
    return (
        <Stack className="architect-section">
            <Card className="architect-card">
                <Card.Img src={require(`../data/${id}/ava.png`)} className="architect-photo"/>
                <Card.Body className="architect-info">
                    <Card.Title className="architect-name">{t(`architects.${id}.surname`)} {t(`architects.${id}.name`)} {t(`architects.${id}.patronymic`)}</Card.Title>
                    <Card.Text className="architect-years">
                        {data[id]["birthDate"]} - {data[id]["deathDate"]}
                    </Card.Text>
                    <Card.Text className="architect-description">
                        {t(`architects.${id}.longDescription`)}
                    </Card.Text>
                </Card.Body>
            </Card>

            <VerticalTimeline>
                {
                    data[id]["events"].map((time, index) =>
                        <VerticalTimelineElement
                            key = {index}
                            date = {time}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgba(117,89,113,0.84)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgba(140,127,127,0.84)' }}
                            iconStyle={{ background: 'rgba(140,127,127,0.84)', color: '#fff' }}
                        >
                        <p>{t(`architects.${id}.inf${index}`)}</p>
                        </VerticalTimelineElement>

                    )
                }

            </VerticalTimeline>
        </Stack>
    );
}

export default Architect;