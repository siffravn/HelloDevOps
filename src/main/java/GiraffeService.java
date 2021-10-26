import giraffes.Giraffe;
import giraffes.GiraffeDAO;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Produces(MediaType.APPLICATION_JSON)
@Path("giraffes")
public class GiraffeService {

    GiraffeDAO giraffeDAO = new GiraffeDAO();

    @GET
    public List<Giraffe> getGiraffes(){
        return giraffeDAO.getAll();
    }

    @POST
    public Giraffe save(Giraffe giraffe){
        return giraffeDAO.save(giraffe);
    }
}