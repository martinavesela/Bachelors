FROM openjdk
RUN mkdir -p /usr/java
RUN curl 'https://repo1.maven.org/maven2/junit/junit/4.13.1/junit-4.13.1.jar' -o /usr/java/junit.jar
RUN curl 'https://repo1.maven.org/maven2/org/hamcrest/hamcrest/2.2/hamcrest-2.2.jar' -o /usr/java/hamcrest.jar
COPY docker-scripts /usr/java
WORKDIR /usr/java
CMD /usr/java/entrypoint.sh