"use client"

import React, { useState } from 'react';
import { styles } from '../../../styles/User2.styles';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useTranslation } from "next-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const Select = dynamic(() => import('react-select'), { ssr: false });

// Options for the dropdowns
const responsibleOptions = [
    { value: 'Ayesha Atif', label: 'Ayesha Atif', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1r6Lyo0NJ_YtuCuqcJ0C5aQguHfWa07AYQ&s' },
    { value: 'Hassan Mahadjir', label: 'Hassan Mahadjir', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1r6Lyo0NJ_YtuCuqcJ0C5aQguHfWa07AYQ&s' },
    { value: 'Melissa', label: 'Melissa', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1r6Lyo0NJ_YtuCuqcJ0C5aQguHfWa07AYQ&s' },
    { value: 'Nour', label: 'Nour', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1r6Lyo0NJ_YtuCuqcJ0C5aQguHfWa07AYQ&s' },
];

const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
];

const roleOptions = [
    { value: 'user', label: 'User' },
    { value: 'staff', label: 'Staff' },
    { value: 'admin', label: 'Admin' },
];

// Define the type for each option
type ResponsibleOption = {
    value: string;
    label: string;
    image: string;
};

const ModifyUser = () => {
    const { t } = useTranslation("common");

    // Constants for translated text
    const Dashboard = t('Dashboard');
    const User = t('User');
    const ModifyUser = t('ModifyUser');
    const FirstName = t('FirstName');
    const LastName = t('LastName');
    const Email = t('Email');
    const Password = t('Password');
    const Phone = t('Phone');
    const Address = t('Address');
    const Gender = t('Gender');
    const Role = t('Role');
    const ResponsibleOf = t('ResponsibleOf');
    const DateOfBirth = t('DateOfBirth');
    const RegistrationDate = t('RegistrationDate');
    const Description = t('Description');
    const Save = t('Save');
    const Cancel = t('Cancel');
    const ChangePassword = t('ChangePassword');

    const [selectedResponsible, setSelectedResponsible] = useState<ResponsibleOption | null>(responsibleOptions[0]);
    const [selectedGender, setSelectedGender] = useState<{ value: string; label: string } | null>(genderOptions[0]);
    const [selectedRole, setSelectedRole] = useState<{ value: string; label: string } | null>(roleOptions[0]);

    // Custom option renderer for Select component
    const customOption = (props: any) => {
        const { data, innerRef, innerProps } = props;
        return (
            <div ref={innerRef} {...innerProps} style={styles.option}>
                <img src={data.image} alt="" style={styles.optionImage} />
                <span>{data.label}</span>
            </div>
        );
    };

    // Custom single value renderer for Select component
    const customSingleValue = (props: any) => {
        const { data } = props;
        return (
            <div style={styles.singleValue}>
                <img src={data.image} alt="" style={styles.singleValueImage} />
                <span>{data.label}</span>
            </div>
        );
    };

    return (
        <div>
            <h2 style={styles.heading}>{Dashboard} &gt; {User} &gt; {ModifyUser}</h2>
            <div style={styles.mainContainer}>
                
                <div style={styles.profileContainer}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1r6Lyo0NJ_YtuCuqcJ0C5aQguHfWa07AYQ&s" alt="profile" style={styles.profileImage} />
                    <button style={styles.editProfileButton}>
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                </div>

                <div style={styles.leftColumn}>
                    <div style={{display: 'flex', flexDirection: 'row' as 'row'}}>
                        <label style={styles.label}>{FirstName}</label>
                        <label style={styles.lastnamelabel}>{LastName}</label>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row' as 'row'}}>
                        <input type="text" style={styles.shortinput} />
                        <input type="text" style={styles.shortinput} />
                    </div>

                    <label style={styles.label}>{Email}</label>
                    <input type="email" style={styles.longinput} />

                    <label style={styles.label}>{Password}</label>
                    <div style={styles.passwordContainer}>
                        <input type="password" style={styles.longinput} />
                        <button style={styles.changePasswordButton}>{ChangePassword}</button>
                    </div>

                    <label style={styles.label}>{Phone}</label>
                    <input type="text" style={styles.longinput} />

                    <label style={styles.label}>{Address}</label>
                    <input type="text" style={styles.longinput} />
                </div>

                <div style={styles.rightColumn}>
                    <div style={{ display: 'flex', flexDirection: 'row' as 'row' }}>
                        <label style={styles.label}>{Gender}</label>
                        <label style={styles.rolelabel}>{Role}</label>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' as 'row', gap: '10px' }}>
                        <Select
                            value={selectedGender}
                            onChange={(option) => setSelectedGender(option as { value: string; label: string } | null)}
                            options={genderOptions}
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    border: '1px solid #6b6b6b',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    height: '35px',
                                    width: '250px',
                                    color: '#6b6b6b',
                                    fontSize: '14px'
                                }),
                                dropdownIndicator: (base) => ({
                                    ...base,
                                    padding: '0',
                                    color: '#6b6b6b',
                                }),
                                indicatorSeparator: () => ({ display: 'none' }),
                                option: (base) => ({
                                    ...base,
                                    color: 'black'
                                })
                            }}
                            isSearchable={false}
                        />
                        <Select
                            value={selectedRole}
                            onChange={(option) => setSelectedRole(option as { value: string; label: string } | null)}
                            options={roleOptions}
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    border: '1px solid #6b6b6b',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    height: '35px',
                                    width: '250px',
                                    color: '#6b6b6b',
                                    fontSize: '14px'
                                }),
                                dropdownIndicator: (base) => ({
                                    ...base,
                                    padding: '0',
                                    color: '#6b6b6b',
                                }),
                                indicatorSeparator: () => ({ display: 'none' }),
                                option: (base) => ({
                                    ...base,
                                    color: 'black'
                                })
                            }}
                            isSearchable={false}
                        />
                    </div>

                    <label style={styles.label}>{DateOfBirth}</label>
                    <input type="date" style={styles.shortinput} />

                    <label style={styles.label}>{RegistrationDate}</label>
                    <input type="date" style={styles.shortinput} />

                    <label style={styles.label}>{ResponsibleOf}</label>
                    <div style={styles.dropdownContainer}>
                        <Select
                            value={selectedResponsible}
                            onChange={(option) => setSelectedResponsible(option as ResponsibleOption | null)}
                            options={responsibleOptions}
                            components={{ Option: customOption, SingleValue: customSingleValue }}
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    border: '1px solid #093D56',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    height: '35px',
                                }),
                                dropdownIndicator: (base) => ({
                                    ...base,
                                    padding: '0',
                                    transform: 'translateY(-5px)',
                                    color: '#093D56'
                                }),
                                indicatorSeparator: () => ({ display: 'none' }),
                            }}
                            isSearchable={false}
                        />
                    </div>

                    <label style={styles.label}>{Description}</label>
                    <textarea style={styles.textarea} />
                </div>

                <div style={styles.buttonContainer}>
                    <Link href="/screens/User" passHref>
                        <button style={styles.saveButton}>{Save}</button>
                        <button style={styles.cancelButton}>{Cancel}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ModifyUser;