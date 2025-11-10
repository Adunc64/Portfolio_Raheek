import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import bgImage from '../assets/background.jpg';

export default function ContactScreen() {
  const contactMethods = [
    {
      icon: 'mail',
      label: 'Email',
      value: 'raheekraiyan@gmail.com',
      action: () => Linking.openURL('mailto:raheekraiyan@gmail.com'),
    },
    {
      icon: 'call',
      label: 'Phone',
      value: '01304008820',
      action: () => Linking.openURL('tel:01304008820'),
    },
    {
      icon: 'logo-linkedin',
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/raheekmraiyan',
      action: () => Linking.openURL('https://www.linkedin.com/in/raheekmraiyan'),
    },
    {
      icon: 'logo-github',
      label: 'GitHub',
      value: 'https://github.com/Adunc64',
      action: () => Linking.openURL('https://github.com/Adunc64'),
    },
  ];

  return (
    <ImageBackground
      source={bgImage}
      style={styles.background}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
        <Text style={styles.headerTitle}>Get In Touch</Text>
        <Text style={styles.headerSubtitle}>
          Feel free to reach out for collaborations or opportunities
        </Text>

        <View style={styles.contactMethods}>
          {contactMethods.map((method, index) => (
            <TouchableOpacity
              key={index}
              style={styles.contactMethod}
              onPress={method.action}
            >
              <Ionicons name={method.icon} size={24} color="#6366f1" />
              <View style={styles.contactMethodInfo}>
                <Text style={styles.contactMethodLabel}>{method.label}</Text>
                <Text style={styles.contactMethodValue}>{method.value}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
  scrollView: { flex: 1 },
  content: { padding: 20 },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f7f4f4ff',
    marginBottom: 8,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#f7f0f0ff',
    marginBottom: 30,
    textAlign: 'center',
  },
  contactMethods: { marginBottom: 10 },
  contactMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 15,
    padding: 40,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contactMethodInfo: { flex: 1, marginLeft: 15 },
  contactMethodLabel: { fontSize: 14, color: '#666', marginBottom: 5 },
  contactMethodValue: { fontSize: 16, color: '#1a1a1a', fontWeight: '600' },
});
