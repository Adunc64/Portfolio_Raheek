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

const ExperienceCard = ({ experience }) => (
  <View style={styles.experienceCard}>
    <View style={styles.experienceHeader}>
      <View style={styles.iconContainer}>
        <Ionicons name="briefcase" size={28} color="#6366f1" />
      </View>
      <View style={styles.experienceInfo}>
        <Text style={styles.position}>{experience.position}</Text>
        <Text style={styles.company}>{experience.company}</Text>
        <Text style={styles.duration}>
          <Ionicons name="calendar-outline" size={14} color="#666" />{' '}
          {experience.duration}
        </Text>
        {experience.location && (
          <Text style={styles.location}>
            <Ionicons name="location-outline" size={14} color="#666" />{' '}
            {experience.location}
          </Text>
        )}
      </View>
    </View>
    {experience.description && (
      <Text style={styles.description}>{experience.description}</Text>
    )}
    {experience.responsibilities && experience.responsibilities.length > 0 && (
      <View style={styles.responsibilitiesSection}>
        <Text style={styles.responsibilitiesTitle}>Key Responsibilities:</Text>
        {experience.responsibilities.map((resp, index) => (
          <View key={index} style={styles.responsibilityItem}>
            <Ionicons name="chevron-forward" size={16} color="#6366f1" />
            <Text style={styles.responsibilityText}>{resp}</Text>
          </View>
        ))}
      </View>
    )}
    {experience.technologies && experience.technologies.length > 0 && (
      <View style={styles.techStack}>
        {experience.technologies.map((tech, index) => (
          <View key={index} style={styles.techTag}>
            <Text style={styles.techText}>{tech}</Text>
          </View>
        ))}
      </View>
    )}
  </View>
);

export default function ExperienceScreen() {
  const experiences = [
    {
      position: 'Data Analyst Associate Intern',
      company: 'Excelerate (Global Experiential Learning Platform)',
      duration: 'Aug 2025 – Sep 2025',
      location: 'Remote',
      description:
        'Worked as a Data Analyst Associate Intern focusing on data integration, analysis, and visualization to improve learner acquisition and platform metrics.',
      responsibilities: [
        'Integrated datasets into a master dataset, eliminating duplicates and ensuring data consistency',
        'Conducted Exploratory Data Analysis (EDA) and data cleaning operations',
        'Built interactive dashboard for visualizing metrics and analysis',
        'Delivered presentation summarizing key insights to improve learner acquisition',
      ],
      technologies: ['MS Excel', 'Looker', 'Data Analysis', 'Dashboarding', 'Python'],
    },
  ];

  return (
    <ImageBackground
      source={bgImage}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.headerTitle}>Experience</Text>
        <Text style={styles.headerSubtitle}>My professional journey</Text>

        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
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
    color: '#f7f4f4ff',
    marginBottom: 8,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#f8f5f5ff',
    marginBottom: 30,
    textAlign: 'center',
  },
  experienceCard: {
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
  experienceHeader: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  iconContainer: {
    marginRight: 15,
  },
  experienceInfo: {
    flex: 1,
  },
  position: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 5,
  },
  company: {
    fontSize: 16,
    color: '#6366f1',
    fontWeight: '600',
    marginBottom: 8,
  },
  duration: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: '#666',
  },
  description: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
    marginTop: 10,
    marginBottom: 15,
  },
  responsibilitiesSection: {
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  responsibilitiesTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  responsibilityItem: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  responsibilityText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginLeft: 8,
    flex: 1,
  },
  techStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
    gap: 8,
  },
  techTag: {
    backgroundColor: '#e0e7ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 8,
  },
  techText: {
    fontSize: 12,
    color: '#6366f1',
    fontWeight: '600',
  },
});

