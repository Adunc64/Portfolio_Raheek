import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import bgImage from '../assets/background.jpg';

const SkillCategory = ({ title, skills, icon }) => (
  <View style={styles.categoryCard}>
    <View style={styles.categoryHeader}>
      <Ionicons name={icon} size={24} color="#6366f1" />
      <Text style={styles.categoryTitle}>{title}</Text>
    </View>

    {/* Chip list */}
    <View style={styles.chipsWrap}>
      {skills.map((skill, i) => (
        <View key={i} style={styles.chip}>
          <Text style={styles.chipText}>{skill.name}</Text>
        </View>
      ))}
    </View>
  </View>
);

export default function SkillsScreen() {
  const programmingSkills = [
    { name: 'Python' },
    { name: 'PHP' },
    { name: 'JavaScript' },
    { name: 'SQL' },
    { name: 'C' },
    { name: 'C#' },
  ];

  const webSkills = [
    { name: 'React' },
    { name: 'Flask' },
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'Node.js' },
    { name: 'ASP.NET' },
  ];

  const databaseSkills = [
    { name: 'MySQL' },
    { name: 'PostgreSQL' },
    { name: 'MongoDB' },
    { name: 'SQLite' },
  ];

  const aiMlSkills = [
    { name: 'PyTorch' },
    { name: 'TensorFlow' },
    { name: 'Vision Transformer' },
    { name: 'Data Preprocessing' },
    { name: 'Model Training' },
    { name: 'Langchain' },
    { name: 'RAG' },
  ];

  const toolsSkills = [
    { name: 'Git/GitHub' },
    { name: 'MS Office' },
    { name: 'Looker' },
    { name: 'Figma' },
    { name: 'Jupyter Notebook' },
    { name: 'VS Code' },
    { name: 'PyCharm' },
    { name: 'Ollama' },
    { name: 'Power BI' }
  ];

  return (
    <ImageBackground
      source={bgImage}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.headerTitle}>My Skills</Text>
        <Text style={styles.headerSubtitle}>Technologies and tools I work with</Text>

        <SkillCategory title="Programming Languages" skills={programmingSkills} icon="code-slash-outline" />
        <SkillCategory title="Web Development" skills={webSkills} icon="desktop-outline" />
        <SkillCategory title="Databases" skills={databaseSkills} icon="apps-outline" />
        <SkillCategory title="AI & Machine Learning" skills={aiMlSkills} icon="brain-outline" />
        <SkillCategory title="Tools & Technologies" skills={toolsSkills} icon="construct-outline" />
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
  container: { flex: 1, backgroundColor: 'transparent' },
  content: { padding: 20 },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f5f4f4ff',
    marginBottom: 8,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#f8f7f7ff',
    marginBottom: 30,
    textAlign: 'center',
  },
  categoryCard: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginLeft: 10,
  },

  /* Chip styles */
  chipsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
  },
  chip: {
    backgroundColor: '#eef2ff',          // soft indigo tint
    borderColor: '#c7d2fe',
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
    marginRight: 8,
    marginBottom: 8,
  },
  chipText: {
    color: '#3730a3',
    fontWeight: '600',
    fontSize: 14,
  },
});
