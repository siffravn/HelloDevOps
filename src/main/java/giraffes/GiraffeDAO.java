package giraffes;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.Metadata;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;

import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;

public class GiraffeDAO {

    SessionFactory sessionFactory;

    public GiraffeDAO() {
        StandardServiceRegistry ssr = new StandardServiceRegistryBuilder().configure("hibernate.cfg.xml").build();
        Metadata meta = new MetadataSources(ssr).getMetadataBuilder().build();

        try {
            sessionFactory = meta.getSessionFactoryBuilder().build();

        } catch (Throwable ex) {
            System.err.println("Failed to create sessionFactory object." + ex);
            throw new ExceptionInInitializerError(ex);
        }
    }

    public List<Giraffe> getAll() {
        Session session = sessionFactory.openSession();
        CriteriaQuery<Giraffe> query = session.getCriteriaBuilder().createQuery(Giraffe.class);
        Root<Giraffe> from = query.from(Giraffe.class);
        query.select(from);
        List<Giraffe> resultList = session.createQuery(query).getResultList();
        return resultList;
    }

    public Giraffe save(Giraffe giraffe) {
        Session session = sessionFactory.openSession();
        session.save(giraffe);
        session.close();
        return giraffe;
    }

}
