"use client"

import React, { useState } from 'react';
import { styles } from '../../../styles/Departments2.styles';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useTranslation } from "next-i18next";

const Select = dynamic(() => import('react-select'), {ssr:false});

// Options for the dropdown with images
const responsibleOptions = [
    { value: 'Ayesha Atif', label: 'Ayesha Atif', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1r6Lyo0NJ_YtuCuqcJ0C5aQguHfWa07AYQ&s' },
    { value: 'Hassan Mahadjir', label: 'Hassan Mahadjir', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1r6Lyo0NJ_YtuCuqcJ0C5aQguHfWa07AYQ&s' },
    { value: 'Melissa ', label: 'Melissa', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1r6Lyo0NJ_YtuCuqcJ0C5aQguHfWa07AYQ&s' },
    { value: 'Nour', label: 'Nour', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1r6Lyo0NJ_YtuCuqcJ0C5aQguHfWa07AYQ&s' },
];

// Define the type for each option
type ResponsibleOption = {
    value: string;
    label: string;
    image: string;
};

const ModifyDepartment = () => {
    const { t } = useTranslation("common"); 

    // Constants for translated text
    const Dashboard = t('Dashbaord');
    const Departments = t('Departments');
    const ModifyDepartment = t('ModifyDepartment'); 
    const DepartmentName = t('DepartmentName');
    const Email = t('Email');
    const Description = t('Description');
    const Responsible = t('Responsible');
    const PhoneNumber = t('PhoneNumber');
    const Edit = t('Edit'); 
    const Save = t('Save');
    const Services = t('Services');
    const BusServices = t('BusServices');
    const LaunchedOn = t('LaunchedOn')

    const [selectedResponsible, setSelectedResponsible] = useState<ResponsibleOption | null>(responsibleOptions[0]);

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

    return(
        <div>
            <h2 style={styles.heading}>{Dashboard} &gt; {Departments} &gt; {ModifyDepartment}</h2>
            <div style={styles.maincontainer}>
                <div style={{display: 'flex', flexDirection: 'row' as 'row'}}>
                    <div style={styles.formSection}>
                        <label>{DepartmentName}</label>
                        <input type="text" style={styles.input}/>

                        <label style={{marginTop: '8px'}}>{Description}</label>
                        <textarea style={styles.textarea}/>

                        <label style={{marginTop: '8px'}}>{Email}</label>
                        <input type="text" style={styles.input}/>

                        <label style={{marginTop: '8px'}}>{PhoneNumber}</label>
                        <input type="text" style={styles.input}/>

                        <label style={{marginTop: '8px'}}>{Responsible}</label>
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
                                        width: '200px',
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
                    </div>

                    <div style={styles.servicesSection}>
                        <h3 style={styles.servicesHeading}>{Services}</h3>
                        {[...Array(2)].map((_, i) => (
                            <div key={i} style={styles.serviceCard}>
                                <div style={styles.serviceImage}>
                                    <img src="https://www.pngitem.com/pimgs/m/555-5552616_transparent-bus-icon-png-icon-blue-bus-png.png" alt=""/>
                                </div>
                                <div>
                                    <p style={styles.serviceTitle}>{BusServices}</p>
                                    <p style={styles.serviceDate}>{LaunchedOn} 10/10/2024</p>
                                </div>
                                <button style={styles.editButton}>{Edit}</button>
                            </div>
                        ))}
                    </div>
                </div>
                <Link href="/screens/Departments" passHref>
                    <div style={styles.saveContainer}>
                        <button style={styles.saveButton}>{Save}</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ModifyDepartment;
