import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../services/api';

const Incidents = () => {
  const [incidents, setIncidents] = useState([]);
  const [totalIncidents, setTotalIncidents] = useState(0);
  const navigation = useNavigation();

  const navigateToDetail = incident => {
    navigation.navigate('Detail', { incident });
  };

  useEffect(() => {
    const loadIncidents = async () => {
      const response = await api.get('/incidents');
      setTotalIncidents(response.headers[['x-total-count']]);
      setIncidents(response.data);
    };
    loadIncidents();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de{' '}
          <Text style={styles.headerTextBold}>{totalIncidents} casos</Text>
        </Text>
      </View>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia
      </Text>

      <FlatList
        data={incidents}
        style={styles.incidentList}
        showsVerticalScrollIndicator={false}
        keyExtractor={incident => String(incident.id)}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(incident.value)}
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail(incident)}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes.</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Incidents;
