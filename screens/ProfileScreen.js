import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Linking,
  Image,
  ImageBackground, // <-- added
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import profileImg from '../assets/profile.png';
import bgImage from '../assets/background.jpg'; // <-- added

const SOCIALS = {
  github: 'https://github.com/Adunc64',
  linkedin: 'https://www.linkedin.com/in/raheekmraiyan',
};

const CONTACT = {
  email: 'raheekraiyan@gmail.com',
  phone: '01304008820',
};

const CV_URL =
  'https://drive.google.com/uc?export=download&id=1vihboGiabrPU8ecj314oeA7Gf_1niAJY';

const openLink = async (url) => {
  try {
    const supported = await Linking.canOpenURL(url);
    if (supported) await Linking.openURL(url);
    else Alert.alert("Can't open this link", url);
  } catch (e) {
    Alert.alert('Error', e.message);
  }
};

export default function ProfileScreen() {
  return (
    <ImageBackground
      source={bgImage}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={profileImg}
              style={styles.avatarImage}
              accessibilityLabel="Profile photo of Raheek Muhammad Raiyan"
            />
          </View>

          <Text style={styles.name}>Raheek Muhammad Raiyan</Text>
          <Text style={styles.title}>Computer Science Graduate</Text>
          <View style={styles.divider} />
          <Text style={styles.bio}>
            Computer Science graduate skilled in Python, PHP, JavaScript, SQL, Flask, and React with
            experience in ML model development and data analytics. Completed research on deep learning
            for medical imaging and built multiple web-based applications. Former Data Analyst
            Associate Intern at Excelerate with expertise in EDA and dashboarding. Strong
            collaborative and problem-solving skills.
          </Text>
        </View>

        <View style={styles.infoSection}>
          <View style={styles.infoItem}>
            <Ionicons name="location" size={20} color="#6366f1" />
            <Text style={styles.infoText}>Dhaka, Bangladesh</Text>
          </View>

          {/* Tap to email */}
          <TouchableOpacity
            style={styles.infoItem}
            onPress={() =>
              openLink(
                `mailto:${CONTACT.email}?subject=${encodeURIComponent(
                  'Hello from your portfolio'
                )}`
              )
            }
            accessibilityRole="link"
            accessibilityLabel="Send email"
          >
            <Ionicons name="mail" size={20} color="#6366f1" />
            <Text style={[styles.infoText, styles.linkText]}>{CONTACT.email}</Text>
          </TouchableOpacity>

          {/* Tap to call */}
          <TouchableOpacity
            style={styles.infoItem}
            onPress={() => openLink(`tel:${CONTACT.phone}`)}
            accessibilityRole="link"
            accessibilityLabel="Call phone number"
          >
            <Ionicons name="call" size={20} color="#6366f1" />
            <Text style={[styles.infoText, styles.linkText]}>{CONTACT.phone}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.socialSection}>
          <Text style={styles.sectionTitle}>Connect with me</Text>
          <View style={styles.socialIcons}>
            <TouchableOpacity
              style={styles.socialIcon}
              onPress={() => openLink(SOCIALS.github)}
              accessibilityRole="link"
              accessibilityLabel="GitHub profile"
            >
              <Ionicons name="logo-github" size={30} color="#333" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialIcon}
              onPress={() => openLink(SOCIALS.linkedin)}
              accessibilityRole="link"
              accessibilityLabel="LinkedIn profile"
            >
              <Ionicons name="logo-linkedin" size={30} color="#0077b5" />
            </TouchableOpacity>
          </View>

          {/* Download CV button */}
          <TouchableOpacity
            style={styles.cvButton}
            onPress={() => openLink(CV_URL)}
            accessibilityRole="link"
            accessibilityLabel="Download CV PDF"
          >
            <Ionicons name="document-text" size={20} color="#fff" />
            <Text style={styles.cvButtonText}>Download CV</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const AVATAR_SIZE = 120;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: { flex: 1, backgroundColor: 'transparent' },
  content: { padding: 20 },

  profileSection: {
    backgroundColor: 'rgba(255,255,255,0.85)', // semi-transparent
    borderRadius: 15,
    padding: 30,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatarContainer: { marginBottom: 20 },
  avatarImage: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    backgroundColor: '#eef2ff',
    borderWidth: 2,
    borderColor: '#6366f1',
  },

  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    color: '#6366f1',
    marginBottom: 20,
    fontWeight: '600',
  },
  divider: {
    width: 50,
    height: 3,
    backgroundColor: '#6366f1',
    marginBottom: 20,
    borderRadius: 2,
  },
  bio: { fontSize: 16, color: '#666', textAlign: 'center', lineHeight: 24 },

  infoSection: {
    backgroundColor: 'rgba(255,255,255,0.85)', // semi-transparent
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  infoText: { marginLeft: 15, fontSize: 16, color: '#333' },
  linkText: { textDecorationLine: 'underline' },

  socialSection: {
    backgroundColor: 'rgba(255,255,255,0.85)', // semi-transparent
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 15,
    textAlign: 'center',
  },
  socialIcons: { flexDirection: 'row', justifyContent: 'center', gap: 20 },
  socialIcon: { padding: 10 },

  cvButton: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 8,
    marginTop: 16,
    backgroundColor: '#6366f1',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  cvButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});