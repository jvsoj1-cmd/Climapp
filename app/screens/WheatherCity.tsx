import { WeatherForecast } from "@/interfaces/forecast_interfaces";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function WheatherCity() {
    const router = useRouter();

    const { wheatherData } = useLocalSearchParams();

    const wheather: WeatherForecast = JSON.parse(wheatherData as string);

    const formatShortDate = (date: string) => {
        const [, month, day] = date.split('-');
        return `${day}/${month}`;
    };

    return (
        <LinearGradient
            colors={['#00457D', '#05051F']} style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <MaterialIcons name="arrow-back-ios" size={24} color='white' />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{wheather.cityName}</Text>
                <View style={{ width: 24 }} />
            </View>
            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}>
                <View style={styles.mainCard}>
                    <Text style={styles.dateText}>Hoje  ({formatShortDate(wheather.date)})</Text>
                    <Image
                        source={{ uri: wheather.conditionSlug }}
                        style={styles.mainIcon}
                        contentFit="contain"
                    />
                    <Text style={styles.mainTemp}>{wheather.temp}°</Text>
                    <Text style={styles.description}>{wheather.descriptionn}</Text>

                    <View style={styles.humidityContainer}>
                        <MaterialIcons name="water-drop" size={28} color="#4FC3F7" />
                        <Text style={styles.humidityLabel}>Humidity:</Text>
                        <Text style={styles.humidityValue}>{wheather.humidity}%</Text>
                    </View>

                    <View style={styles.minMaxContainer}>
                        <MaterialIcons name="thermostat" size={33} color="#FF5252"/>
                        <Text style={styles.minMaxLabel}>Min/Max</Text>
                        <Text style={styles.minMaxValues}>
                            {wheather.forecast[0].min}° / {wheather.forecast[0].max}°
                        </Text>
                    </View>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.forecastRow}>
                    {wheather.forecast.slice(1).map((day) => (
                        <View key={day.date} style={styles.forecastCard}>
                            <Text style={styles.forecastDay}>{day.weekday}</Text>
                            <Text style={styles.forecastDate}>({formatShortDate(day.date)})</Text>
                            <Image
                                source={{ uri: day.moon_phase }}
                                style={styles.moonIcon}
                                contentFit="contain"
                            />
                            <Text style={styles.forecastTemp}>{day.min}°/{day.max}°</Text>
                        </View>
                    ))}
                </ScrollView>

                <View style={{height:30}}/>
            </ScrollView>

        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 60, // Dá o espaço da barra de status (notch)
        paddingHorizontal: 16,
        paddingBottom: 20,
        backgroundColor: 'rgba(0, 69, 125, 0.5)', // Um leve azul translúcido
    },
    backButton: {
        padding: 8,
    },
    headerTitle: {
        color: 'white',
        fontSize: 22,
        fontFamily: 'Montserrat_600SemiBold',
    },
    scrollContainer: {
        flex: 1,
    },
    scrollContent: {
        padding: 16,
        paddingBottom: 40,
    },
    mainCard: {
        backgroundColor: '#4463D5',
        borderRadius: 20,
        padding: 24,
        alignItems: 'center',
    },
    dateText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Montserrat_600SemiBold',
    },
    mainIcon: {
        width: 120,
        height: 120,
        marginVertical: 10,
    },
    mainTemp: {
        color: 'white',
        fontSize: 60,
        fontFamily: 'Montserrat_700Bold',
    },
    description: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Montserrat_400Regular',
        marginBottom: 20,
    },
    humidityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.1)',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    humidityLabel: {
        color: 'white',
        fontSize: 21,
        fontFamily: 'Montserrat_700Bold',
        marginLeft: 10,
    },
    humidityValue: {
        color: 'white',
        fontSize: 21,
        fontFamily: 'Montserrat_600SemiBold',
        flex: 1,
        textAlign: 'right',
    },
    minMaxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.1)',
        padding: 10,
        borderRadius: 10,
    },
    minMaxLabel: {
        color: 'white',
        fontSize: 21,
        fontFamily: 'Montserrat_700Bold',
        marginLeft: 10,
    },
    minMaxValues: {
        color: 'white',
        fontSize: 21,
        fontFamily: 'Montserrat_600SemiBold',
        flex: 1,
        textAlign: 'right', // Empurra os números para o canto direito
    },
    forecastRow: {
        flexDirection: 'row',
        marginTop: 16,
        gap: 10,
    },
    forecastCard: {
        backgroundColor: 'rgba(5, 5, 31, 0.85)',
        borderRadius: 15,
        padding: 12,
        width: 110,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    forecastDay: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Montserrat_600SemiBold',
        textAlign: 'center',
    },
    forecastDate: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 13,
        fontFamily: 'Montserrat_400Regular',
    },
    moonIcon: {
        width: 36,
        height: 36,
        marginVertical: 10,
    },
    forecastTemp: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Montserrat_700Bold',
    }
});