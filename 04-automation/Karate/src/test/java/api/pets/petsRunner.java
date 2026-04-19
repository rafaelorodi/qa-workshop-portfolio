package api.pets;
import com.intuit.karate.junit5.Karate;

class PetsRunner {
    @Karate.Test
    Karate testPets() {
        return Karate.run("classpath:api/pets").relativeTo(getClass());
    }
}