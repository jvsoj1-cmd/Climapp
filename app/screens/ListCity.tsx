import CityTile from "@/components/CityTile";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet, View } from "react-native";
import { theme } from '../../constants/theme';
import { MOCK_WEATHER_FORECASTS } from '../../mocks/forecast_mock';

export default function ListCityScreen() {
    const router = useRouter();
    return (

        <LinearGradient
            colors={['#00457D', '#05051F']}
            style={styles.container}>
            <View style={styles.content}>
                <View style={{ height: 60 }} />

                <FlatList
                    data={MOCK_WEATHER_FORECASTS}
                    keyExtractor={(item) => item.cityName}
                    renderItem={({ item }) => (
                        <CityTile
                            cityName={item.cityName}
                            icon={item.conditionSlug}
                            temperature={item.temp}
                            onTap={() => {
                                router.push({
                                    pathname: '../screens/WheatherCity',
                                    params:{ wheatherData: JSON.stringify(item)}
                                })
                             }} />
                    )}
                    contentContainerStyle={styles.listContent}
                />
            </View>
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: 16,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.colors.text,
        padding: theme.spacing.md,
    },
    listContent: {
        paddingHorizontal: theme.spacing.md,
        paddingBottom: theme.spacing.lg,
    }
});