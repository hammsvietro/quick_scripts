text = '=SE(E#; E1 & " - "; "") & SE(F#; F1 & " - "; "") & SE(G#; G1 & " - "; "") & SE(H#; H1 & " - "; "") & SE(I#; I1 & " - "; "") & SE(K#; K1 & " - "; "") & SE(L#; L1 & " - "; "") & SE(M#; M1 & " - "; "") & SE(N#; N1 & " - "; "")'

line = str(input())

text = text.replace('#',line)

print(text)



