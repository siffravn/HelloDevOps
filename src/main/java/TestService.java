import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("test")
public class TestService {

    @GET
    public String getTest(){
        return "Hello World";
    }

    @Path("1")
    @GET
    public String getTest2(){
        return "Issue #1 solved!";
    }
}
