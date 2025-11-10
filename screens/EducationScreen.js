import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import bgImage from '../assets/background.jpg';

const EducationCard = ({ education }) => (
  <View style={styles.educationCard}>
    <View style={styles.educationHeader}>
      <View style={styles.iconContainer}>
        <Ionicons name="school" size={28} color="#6366f1" />
      </View>
      <View style={styles.educationInfo}>
        <Text style={styles.degree}>{education.degree}</Text>
        <Text style={styles.institution}>{education.institution}</Text>
        <Text style={styles.duration}>
          <Ionicons name="calendar-outline" size={14} color="#666" />{' '}
          {education.duration}
        </Text>
      </View>
    </View>
    {education.description && (
      <Text style={styles.description}>{education.description}</Text>
    )}
    {education.courses && education.courses.length > 0 && (
      <View style={styles.coursesSection}>
        <Text style={styles.coursesTitle}>Relevant Coursework:</Text>
        <View style={styles.coursesList}>
          {education.courses.map((course, index) => (
            <Text key={index} style={styles.courseItem}>
              • {course}
            </Text>
          ))}
        </View>
      </View>
    )}
  </View>
);

export default function EducationScreen() {
  const education = [
    {
      degree: 'B.Sc. in Computer Science & Engineering',
      institution: 'BRAC University',
      duration: '2021 - 2025',
      description:
        'Focused on software engineering, algorithms, data structures, web development, and machine learning. Completed undergraduate research on deep learning for medical imaging. CGPA: 3.12',
      courses: [
        'Data Structures and Algorithms',
        'Software Engineering',
        'Database Systems',
        'Web Development',
        'Machine Learning',
        'Computer Vision',
        'Artificial Intelligence',
      ],
    },
    {
      degree: 'HSC in Science',
      institution: 'Dhaka Residential Model College',
      duration: '2018 - 2020',
      description: 'Completed Higher Secondary Certificate in Science with GPA: 5.00',
    },
    {
      degree: 'SSC in Science',
      institution: 'Dhaka Residential Model College',
      duration: '2017 - 2018',
      description: 'Completed Secondary School Certificate in Science with GPA: 5.00',
    },
  ];

  return (
    <ImageBackground
      source={bgImage}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.headerTitle}>Education</Text>
        <Text style={styles.headerSubtitle}>My academic journey</Text>

        {education.map((edu, index) => (
          <EducationCard key={index} education={edu} />
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  content: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f8f6f6ff',
    marginBottom: 8,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#fdf9f9ff',
    marginBottom: 30,
    textAlign: 'center',
  },
  educationCard: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  educationHeader: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  iconContainer: {
    marginRight: 15,
  },
  educationInfo: {
    flex: 1,
  },
  degree: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 5,
  },
  institution: {
    fontSize: 16,
    color: '#6366f1',
    fontWeight: '600',
    marginBottom: 8,
  },
  duration: {
    fontSize: 14,
    color: '#666',
  },
  description: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
    marginTop: 10,
    marginBottom: 10,
  },
  coursesSection: {
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  coursesTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 10,
  },
  coursesList: {
    marginLeft: 10,
  },
  courseItem: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    marginBottom: 5,
  },
});

