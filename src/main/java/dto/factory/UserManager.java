package dto.factory;

import dto.models.User;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.boot.Metadata;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;

public class UserManager {

    SessionFactory factory;

    public UserManager() {
        StandardServiceRegistry ssr = new StandardServiceRegistryBuilder().configure("hibernate.cfg.xml").build();
        Metadata meta = new MetadataSources(ssr).getMetadataBuilder().build();

        try {
            factory = meta.getSessionFactoryBuilder().build();

        } catch (Throwable ex) {
            System.err.println("Failed to create sessionFactory object." + ex);
            throw new ExceptionInInitializerError(ex);
        }
    }

    public static void main(String[] args) {
        UserManager um = new UserManager();
        String id = um.saveUser();

        System.out.println("saved user with id " + id);
    }

    public String saveUser() {
        Session session = factory.openSession();
        Transaction tx = null;
        String userIdSaved = null;

        try {
            tx = session.beginTransaction();
            User u = new User();
            u.setFirst_name("test");
            userIdSaved = session.save(u).toString();
            tx.commit();
        } catch (HibernateException ex) {
            if (tx != null)
                tx.rollback();
            ex.printStackTrace();
        } finally {
            session.close();
        }

        return userIdSaved;
    }

}
