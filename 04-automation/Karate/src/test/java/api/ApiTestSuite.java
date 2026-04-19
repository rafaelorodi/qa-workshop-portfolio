package api;
import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class ApiTestSuite { // [cite: 34, 82]

    @Test
    void testParallel() {
        Results results = Runner.path("classpath:api") // [cite: 38]
                .parallel(5);
        assertEquals(0, results.getFailCount(), results.getErrorMessages());
    }
}