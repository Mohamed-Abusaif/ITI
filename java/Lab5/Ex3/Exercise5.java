
import java.util.Objects;
import java.util.Comparator;

public class Exercise5 {

    public static void main(String[] args) {
        CountryDao countryDao = InMemoryWorldDao.getInstance();
        System.out.println(
                countryDao.findAllCountries().stream().map(country -> country.getCities().stream()
                        .filter(city -> city.getId() == country.getCapital()).findFirst().orElse(null))
                        .filter(Objects::nonNull)
                        .max(Comparator.comparingInt(City::getPopulation))
                        .orElse(null));
    }

}