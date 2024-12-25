import java.util.Comparator;
import java.util.Map;
import java.util.Set;

public class Exercise2 {

    public static void main(String[] args) {
        InMemoryWorldDao countryDao = InMemoryWorldDao.getInstance();
        Set<String> allContinents = countryDao.getContinents(); 
        Map<String, Country> allCountries = countryDao.getCountries(); 
        for (String continent : allContinents) {
            City mostPopulatedCity = allCountries.values().stream()
                    .filter(country -> country.getContinent().equals(continent)) 
                    .flatMap(country -> country.getCities().stream()) 
                    .max(Comparator.comparingInt(City::getPopulation)) 
                    .orElse(null); 
            if (mostPopulatedCity != null) {
                Country country = allCountries.get(mostPopulatedCity.getCountryCode()); 
                System.out.println("Continent: " + continent + "its most populated city: " +
                        mostPopulatedCity.getName() + " in country: " + country.getName() +
                        " with a population of: " + mostPopulatedCity.getPopulation());
            } else {
                System.out.println("Continent: " + continent + " has no cities with population data.");
            }
        }
    }
}