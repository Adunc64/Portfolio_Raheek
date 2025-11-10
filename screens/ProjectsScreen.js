import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  ImageBackground,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import bgImage from '../assets/background.jpg';

const ProjectCard = ({ project }) => (
  <View style={styles.projectCard}>
    <View style={styles.projectHeader}>
      <Ionicons name="folder" size={32} color="#6366f1" />
      <View style={styles.projectTitleContainer}>
        <Text style={styles.projectTitle}>{project.title}</Text>
        <Text style={styles.projectDate}>{project.date}</Text>
      </View>
    </View>
    <Text style={styles.projectDescription}>{project.description}</Text>
    <View style={styles.techStack}>
      {project.technologies.map((tech, index) => (
        <View key={index} style={styles.techTag}>
          <Text style={styles.techText}>{tech}</Text>
        </View>
      ))}
    </View>
    <View style={styles.projectLinks}>
      {project.github && (
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => Linking.openURL(project.github)}
        >
          <Ionicons name="logo-github" size={20} color="#333" />
          <Text style={styles.linkText}>GitHub</Text>
        </TouchableOpacity>
      )}
      {project.demo && (
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => Linking.openURL(project.demo)}
        >
          <Ionicons name="open-outline" size={20} color="#6366f1" />
          <Text style={[styles.linkText, { color: '#6366f1' }]}>Demo</Text>
        </TouchableOpacity>
      )}
    </View>
  </View>
);

export default function ProjectsScreen() {
  const projects = [
    {
      title: 'Schizophrenia Detection using Deep Learning',
      date: '2024',
      description:
        'Developed a hybrid 3D ConvNeXt–ViT model for schizophrenia detection on 4D fMRI data, using TorchIO-based preprocessing and 5-fold cross-validation on the COBRE dataset, achieving 91.06% accuracy. This undergraduate research project demonstrates expertise in computer vision and medical imaging.',
      technologies: ['PyTorch', 'TorchIO', 'NiBabel', 'NumPy', 'Matplotlib', 'Python'],
      github: 'https://github.com/DragzterX/Thesis-T2420320',
    },
    {
      title: 'Krishi Network',
      date: '2024',
      description:
        'An e-marketplace platform connecting farmers with agricultural experts and sellers, built with React for frontend and Node.js/Express for backend and MongoDB database integration. Facilitates seamless communication and trade in the agricultural sector.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript'],
      github: 'https://github.com/AlviNoob/krishinetwork',
    },
    {
      title: 'Exchangeify - E-Commerce Website',
      date: '2023',
      description:
        'Flask-based web application that serves as a multi-purpose buy, sell, exchange platform with real-time chat implemented. Provides a comprehensive solution for online trading and communication.',
      technologies: ['Python', 'Flask', 'HTML', 'CSS', 'WebSockets'],
      github: 'https://github.com/Adunc64/ECommerce_exchangeify',
    },
    {
      title: 'Club Management System',
      date: '2023',
      description:
        'A university club management website built using PHP for the backend, MySQL for the database, and HTML/CSS for the frontend. Streamlines club operations and member management.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
      github: 'https://github.com/Adunc64/Club-Management-Project',
    },
    {
      title: 'Bubble Shooter Game',
      date: '2022',
      description:
        'A 2D bubble shooter game implemented using OpenGL and Python with multiple levels, power-ups, and physics-based bubble mechanics. Demonstrates proficiency in game development and graphics programming.',
      technologies: ['Python', 'OpenGL', 'Game Development'],
      github: 'https://github.com/Adunc64/Bubble_shoot_game',
    },
  ];

  return (
    <ImageBackground
      source={bgImage}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.headerTitle}>My Projects</Text>
        <Text style={styles.headerSubtitle}>
          A collection of my recent work and side projects
        </Text>

        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
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
    color: '#f7f3f3ff',
    marginBottom: 30,
    textAlign: 'center',
  },
  projectCard: {
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
  projectHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  projectTitleContainer: {
    marginLeft: 15,
    flex: 1,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 5,
  },
  projectDate: {
    fontSize: 14,
    color: '#666',
  },
  projectDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 15,
  },
  techStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
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
  projectLinks: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 10,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#f3f4f6',
    gap: 8,
  },
  linkText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
});

