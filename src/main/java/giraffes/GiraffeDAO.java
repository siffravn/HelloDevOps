package giraffes;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.boot.Metadata;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;

import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class GiraffeDAO {

    SessionFactory sessionFactory;

    public GiraffeDAO() {

        // TODO: centralise sessionFactory initialization
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

    public Giraffe get(int id)  {
        Session session = sessionFactory.openSession();
        Giraffe giraffe = session.load(Giraffe.class, id);
        return giraffe;
    }

    // TODO: make it return generated id?
    public Giraffe save(Giraffe giraffe) {
        Session session = sessionFactory.openSession();
        Transaction transaction = null;

        try {
            transaction = session.beginTransaction();
            session.save(giraffe);
            transaction.commit();
        } catch (HibernateException e) {
            if (transaction != null)
                transaction.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
        return giraffe;
    }

    public void update(Giraffe giraffe) {
        Session session = sessionFactory.openSession();
        Transaction transaction = null;

        try {
            transaction = session.beginTransaction();
            session.update(giraffe);
            transaction.commit();
        } catch (HibernateException e) {
            if (transaction != null)
                transaction.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
    }

    public void delete(Giraffe giraffe) {
        Session session = sessionFactory.openSession();
        Transaction transaction = null;

        try {
            transaction = session.beginTransaction();
            session.delete(giraffe);
            transaction.commit();

        } catch (HibernateException e) {
            if (transaction != null)
                transaction.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
    }


    // Test script - TODO remove this when unit test is implemented...
    public static void main(String[] args) {
        Giraffe giraffe = new Giraffe();
        giraffe.setFirst_name("Elmer");
        giraffe.setLast_name("Elmeyer");
        giraffe.setAge(5);

        GiraffeDAO giraffeDAO = new GiraffeDAO();
        giraffeDAO.save(giraffe);
        System.out.println("giraffe saved");

        List<Giraffe> giraffes = new ArrayList<>();

        giraffes = giraffeDAO.getAll();
        for (Giraffe g : giraffes) {
            System.out.println(g.toString());
        }

        Giraffe loaded = giraffeDAO.get(8);
        System.out.println("giraffe loaded " + loaded.toString());

        giraffe.setLast_name("Ellerbeller");

        giraffeDAO.update(giraffe);
        System.out.println("giraffe updated");

        giraffes = giraffeDAO.getAll();
        for (Giraffe g : giraffes) {
            System.out.println(g.toString());
        }

        giraffeDAO.delete(giraffe);
        System.out.println("giraffe deleted");

        giraffes = giraffeDAO.getAll();
        for (Giraffe g : giraffes) {
            System.out.println(g.toString());
        }
    }

}
