import { ForecastDay, WeatherForecast } from '@/interfaces/forecast_interfaces';

const MOCK_ICON = 'https://www.gstatic.com/weather/conditions/v1/svg/mostly_clear_night_light.svg';
const MOCK_MOON_PHASE = 'https://img.icons8.com/glyph-neue/1200/moon.jpg';

const buildForecastDays = (baseMax: number, baseMin: number): ForecastDay[] => [
    { date: '2026-07-23', weekday: 'Qui', min: baseMin, max: baseMax, moon_phase: MOCK_MOON_PHASE },
    { date: '2026-07-24', weekday: 'Sex', min: baseMin - 1, max: baseMax + 1, moon_phase: MOCK_MOON_PHASE },
    { date: '2026-07-25', weekday: 'Sáb', min: baseMin, max: baseMax - 1, moon_phase: MOCK_MOON_PHASE },
    { date: '2026-07-26', weekday: 'Dom', min: baseMin + 1, max: baseMax, moon_phase: MOCK_MOON_PHASE },
    { date: '2026-07-27', weekday: 'Seg', min: baseMin - 2, max: baseMax - 2, moon_phase: MOCK_MOON_PHASE },
];

export const MOCK_WEATHER_FORECASTS: WeatherForecast[] = [
    {
        cityName: 'Aracaju - SE',
        temp: 24,
        date: '2026-07-23',
        descriptionn: 'Parcialmente nublado',
        conditionSlug: MOCK_ICON,
        humidity: 78,
        forecast: buildForecastDays(29, 23),
    },
    {
        cityName: 'Santos - SP',
        temp: 24,
        date: '2026-07-23',
        descriptionn: 'Nublado com chuvisco',
        conditionSlug: MOCK_ICON,
        humidity: 85,
        forecast: buildForecastDays(26, 19),
    },
    {
        cityName: 'Xique-Xique - BA',
        temp: 24,
        date: '2026-07-23',
        descriptionn: 'Céu limpo',
        conditionSlug: MOCK_ICON,
        humidity: 45,
        forecast: buildForecastDays(33, 21),
    },
    {
        cityName: 'Lagarto - SE',
        temp: 24,
        date: '2026-07-23',
        descriptionn: 'Ensolarado',
        conditionSlug: MOCK_ICON,
        humidity: 60,
        forecast: buildForecastDays(30, 20),
    },
];
