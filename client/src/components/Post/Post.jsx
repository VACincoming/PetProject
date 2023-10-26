import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CustomButton from 'customComponents/CustomButton';
import BasicModal from 'components/BasicModal';
import './index.scss';

const Post = ({
    title = 'Пропал кот',
    description = 'Рыжий кот пропал',
    type = 'found',
    createdAt = '20/07/2021',
    id = '',
    contactEmail = 'Vasil Pertovich',
    contactPhone = '+380931235422',
    photoUrl = 'https://ichef.bbci.co.uk/news/976/cpsprodpb/1086B/production/_115619676_dog2.jpg',
    deletePost,
    status,
    role,
}) => {
    const date = createdAt?.split(' ')[0];
    const [typeAnn, setTypeAnn] = useState(type);
    const [openModal, setOpenModal] = useState(false);
    const history = useHistory();
    useEffect(() => {
        if (type === 'found') {
            setTypeAnn('Знайдено');
            return;
        }
        setTypeAnn('Втрачено');
    }, []);
    if (status !== 'ACTIVE') {
        return null;
    }
    return (
        <div data-component="announ">
            <div
                className="announ-image"
                onClick={() => history.push(`/view-post/${id}`)}
            >
                <img src={photoUrl} alt="pet" />
            </div>
            <div className="announ-content">
                <div className="announ-top">
                    <div className="announ-top-line">
                        <h3
                            className="announ-title"
                            onClick={() => history.push(`/view-post/${id}`)}
                        >
                            {title}
                        </h3>
                        {role === 'ADMIN' && (
                            <CustomButton
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenModal(true);
                                }}
                                text="Delete"
                                variant="contained"
                            />
                        )}
                    </div>
                    <span className="announ-description">{description}</span>
                </div>
                <div className="announ-contacts">
                    <h4 style={{ marginBottom: '0.5rem' }}>Contacts</h4>
                    <p>{contactEmail}</p>
                    <p>{contactPhone}</p>
                </div>
                <div className="announ-bottom-info">
                    <h4 className="announ-type">{typeAnn}</h4>
                    <div className="announ-date">
                        <div>{date}</div>
                    </div>
                </div>
            </div>
            <BasicModal
                open={openModal}
                handleClose={() => setOpenModal(false)}
                onConfirm={deletePost}
                title="Confirmation"
                description="Are you sure to delete it?"
            />
        </div>
    );
};

export default Post;
