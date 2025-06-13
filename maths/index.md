---
title: 🔢 Mathématiques
---

# 🪙 Les Justifications Essentielles

## Suites
- **Arithmétique** : $u_{n+1} = u_n + r$ 
- **Géométrique** : $u_{n+1} = u_n × q$ 


## Propriétés sur les limites

| $\lim_{x \to a} f(x) =$              | $\ell \in \mathbb{R}$  | $\ \ell \ne 0$ | $+\infty$ | $-\infty$ | $0$         | $+\infty$  |
| ------------------------------------ | ---------------------- | -------------- | --------- | --------- | ----------- | ---------- |
| $\lim_{x \to a} g(x) =$              | $\ell' \in \mathbb{R}$ | $\pm\infty$    | $+\infty$ | $-\infty$ | $\pm\infty$ | $-\infty$  |
| $\lim_{x \to a} f(x) + g(x) =$       | $\ell + \ell'$         | $\pm\infty$    | $+\infty$ | $-\infty$ | $\pm\infty$ | **❌ F.I.** |
| $\lim_{x \to a} f(x) × g(x) =$       | $\ell + \ell'$         | $\infty$       | $+\infty$ | $+\infty$ | **❌ F.I.**  | $-\infty$  |
| $\lim_{x \to a} \frac{f(x)}{g(x)} =$ | $\frac{\ell}{\ell'}$   | $\infty$       | $0$       | $\infty$  | **❌ F.I.**  | **❌ F.I.** |

## Variables Aléatoires

## Loi Binomiale

On répète `X` fois, de manière **identique** et **indépendante** la même épreuve de Bernoulli (lancé de dé) **de succès** "obtenir `x`" de probabilité `x`.

Donc la variable aléatoire `X` suit une loi binomiale de paramètres n=`x` et p=`x`
