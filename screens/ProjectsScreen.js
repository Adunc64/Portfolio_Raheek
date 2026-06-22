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
        <Text style={styles.projectType}>{project.type}</Text>
      </View>
    </View>
    

    <View style={styles.projectDescription}>
      {project.description.map((description, index) => (
        <Text key={index} style={styles.descriptionItem}>
          • {description}
        </Text>
      ))}
    </View>

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
      type: 'Undergraduate Thesis',
      description: [
        'Developed a hybrid 3D ConvNeXt–ViT model for schizophrenia detection on 4D fMRI data, using TorchIO-based preprocessing and 5-fold cross-validation on the COBRE dataset, achieving 91.06% accuracy. This undergraduate research project demonstrates expertise in computer vision and medical imaging.'
      ],
      technologies: ['PyTorch', 'TorchIO', 'NiBabel', 'NumPy', 'Matplotlib', 'Python'],
      github: 'https://github.com/DragzterX/Thesis-T2420320',
    },
    {
      title: 'Krishi Network',
      type: 'e-marketplace platform',
      description: [
        'Created an e-marketplace platform connecting farmers with agricultural experts and product sellers',
        'Developed the frontend in React and built RESTful APIs with Node.js/Express, backed by MongoDB.',
        'Focused on a user-friendly interface and smooth data flow between client and server for listings and consultations',
      ],      
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript'],
      github: 'https://github.com/AlviNoob/krishinetwork',
    },
    {
      title: 'AI PDF Reader',
      type: 'Personal Portfolio',
      description: [
        'Developed a fully local AI-powered PDF Reader using Retrieval-Augmented Generation (RAG) with semantic search and context-aware question answering.',
        'Implemented PDF text extraction, automatic text chunking, embedding generation, and vector storage using ChromaDB for efficient information retrieval.',
        'Built an interactive chat interface with Streamlit and integrated Ollama-based local LLMs to enable accurate question answering without requiring internet access or API keys.',
      ],
      technologies: ['LangChain', 'Ollama', 'ChromaDB', 'Streamlit'],
      github: 'https://github.com/Adunc64/Personal-Portfolio',
    },
    {
      title: 'Exchangeify',
      type: 'e-commerce web application',
      description: [
        'Built a multi-purpose e-commerce web application with Flask, enabling users to buy, sell, and exchange items.',
        'Integrated real-time chat functionality to facilitate direct communication between buyers and sellers.',
        'Structured modular backend routes and templates to support scalable feature additions.'
      ],
      technologies: ['Python', 'Flask', 'HTML', 'CSS', 'WebSockets'],
      github: 'https://github.com/Adunc64/ECommerce_exchangeify',
    },
    {
      title: 'Club Management System',
      type: 'Management based web application',
      description: [
        'Developed a university club management web application using PHP (backend), MySQL (database), and HTML/CSS (frontend).',
        'Implemented features to manage club members, events, and activities in a centralized platform.',
        'Designed and integrated database schemas to store user, event, and club information efficiently.'
      ],
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
      github: 'https://github.com/Adunc64/Club-Management-Project',
    },
    {
      title: 'Bubble Shooter Game',
      type: '2D Game',
      description: [
        'Implemented a 2D bubble shooter game in Python using OpenGL for rendering.',
        'Added multiple levels, power-ups, and physics-based bubble mechanics for engaging gameplay.',
        'Organized game logic and rendering code for easier maintenance and extension of features.'
      ],
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
        <Text style={styles.headerTitle}>My Projects/Thesis</Text>
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

