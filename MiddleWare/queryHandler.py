#!/usr/bin/env python3
# -*- coding: utf-8 -*-

#Script handling business logic 


def generalQuery(conn, query):
    try:
        cursor = conn.cursor()
        cursor.execute(query)
        data = cursor.fetchall()
        cursor.close()
        return data
    except Exception as e:
        print(e)
        cursor.close()
        return "failed"
