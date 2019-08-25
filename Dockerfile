FROM continuumio/miniconda:4.6.14

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

RUN apt-get update && apt-get upgrade -y && apt-get install -qqy \
   wget \
   bzip2 \
   libssl-dev \
   openssh-server

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - && apt-get install -y nodejs

RUN mkdir /var/run/sshd
RUN echo 'root:screencast' | chpasswd
RUN sed -i '/PermitRootLogin/c\PermitRootLogin yes' /etc/ssh/sshd_config

# SSH login fix. Otherwise user is kicked off after login
RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd

ENV NOTVISIBLE "in users profile"
RUN echo "export VISIBLE=now" >> /etc/profile

RUN mkdir -p /app | \
   mkdir -p /media | \
   mkdir -p /static

COPY ./app/requirements.yml /app/requirements.yml
RUN /opt/conda/bin/conda env create -f /app/requirements.yml

ENV PATH /opt/conda/envs/luna/bin:$PATH
RUN sed '$ a conda activate luna' -i /root/.bashrc

# pass the scripts
COPY scripts /scripts/
RUN chmod +x /scripts

COPY ./app /app

COPY ./luna /luna

WORKDIR /luna

RUN npm install && npm run build

WORKDIR /app

EXPOSE 8000
EXPOSE 22