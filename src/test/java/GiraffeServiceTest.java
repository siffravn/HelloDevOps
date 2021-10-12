import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

class GiraffeServiceTest {

    @Test
    void getGiraffes() {
        // Arrange
        List<String> expected = Arrays.asList("Melman", "Elmer");
        GiraffeService gs = new GiraffeService();

        // Act
        List<String> giraffes = gs.getGiraffes();

        // Assert
        Assertions.assertEquals(expected, giraffes);
    }
}