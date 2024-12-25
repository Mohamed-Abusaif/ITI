import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

public class Exercise1 {

   public static void main(String[] args) {
      CountryDao countryDao = InMemoryWorldDao.getInstance();

      List<City> allCities = countryDao.findAllCountries().stream()
            .flatMap(country -> country.getCities().stream())
            .collect(Collectors.toList());

      Map<String, City> highestPopulatedCityPerCountry = allCities.stream()
            .collect(Collectors.groupingBy(City::getCountryCode,
                  Collectors.collectingAndThen(
                        Collectors.maxBy(Comparator.comparingInt(City::getPopulation)),
                        Optional::get)));

      highestPopulatedCityPerCountry.forEach((countryCode, city) -> {
         String countryName = countryDao.findAllCountries().stream()
               .filter(c -> c.getCode().equals(countryCode))
               .map(Country::getName)
               .findFirst()
               .orElse("Unknown Country");

         System.out.println(
               "Country: " + countryName + ", City: " + city.getName() + ", Population: " + city.getPopulation());
      });
   }

}
